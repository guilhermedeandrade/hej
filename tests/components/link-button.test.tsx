import { render, screen } from 'test-utils'
import LinkButton from '@/components/link-button'

test('displays the hello text', () => {
  render(<LinkButton content="say hi!" href="https://localhost:3000" />)

  expect(screen.getByText(/say hi!/i)).toBeInTheDocument()
})
