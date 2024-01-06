import type { MetaFunction } from '@remix-run/node'
import Card from '~/components/Card'

export const meta: MetaFunction = () => {
  return [{ title: 'Blog Preview Card' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className=" my-auto p-6">
      <Card />
    </main>
  )
}
