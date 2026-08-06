import {useCallback, useEffect, useId, useMemo, useRef, useState} from 'react'
import {Box, Card, Stack, Text, TextArea} from '@sanity/ui'
import {ObjectInputProps, set, unset} from 'sanity'
import mermaid from 'mermaid'

mermaid.initialize({startOnLoad: false})

export function MermaidInput(props: ObjectInputProps) {
  const {value, onChange} = props
  const code = (value?.code as string) ?? ''
  const renderId = useId().replace(/:/g, '')

  const [svg, setSvg] = useState('')
  const [error, setError] = useState<string | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const nextCode = event.currentTarget.value
      onChange(nextCode ? set(nextCode, ['code']) : unset(['code']))
    },
    [onChange],
  )

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      if (!code.trim()) {
        setSvg('')
        setError(null)
        return
      }

      try {
        await mermaid.parse(code)
        const {svg: renderedSvg} = await mermaid.render(`mermaid-${renderId}`, code)
        setSvg(renderedSvg)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid Mermaid syntax')
      }
    }, 300)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [code, renderId])

  const previewHtml = useMemo(() => ({__html: svg}), [svg])

  return (
    <Stack space={3}>
      <TextArea
        value={code}
        onChange={handleChange}
        rows={10}
        style={{fontFamily: 'monospace'}}
        placeholder={'graph TD;\n  A-->B;'}
      />
      {error && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>{error}</Text>
        </Card>
      )}
      {!error && svg && (
        <Card padding={3} radius={2} tone="transparent" border>
          <Box style={{display: 'flex', justifyContent: 'center', overflowX: 'auto'}}>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={previewHtml} />
          </Box>
        </Card>
      )}
    </Stack>
  )
}
