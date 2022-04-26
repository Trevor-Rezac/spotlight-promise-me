import { asyncGetQuotes } from './services/promise-me'

export default function App() {
  return (
  <>
  <button onClick={async () => console.log('api quotes!!!!', await asyncGetQuotes())}>Async getQuotes</button>
  </>

  )
}
