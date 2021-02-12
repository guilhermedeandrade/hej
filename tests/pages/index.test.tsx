import { render, screen } from 'test-utils'
import Home from '@/pages/index'

test('renders coming soon message', () => {
  render(<Home />)

  const message = screen.getByText(/coming soon.../i)

  expect(message).toBeInTheDocument()
})
