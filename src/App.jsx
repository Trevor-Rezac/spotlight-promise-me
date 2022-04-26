import { 
  asyncGetQuotes,
  thenGetQuotes 
} from './services/promise-me'

export default function App() {
  return (
  <>
  <button onClick={async () => console.log('asyncGetQuotes!!!!', await asyncGetQuotes())}>asyncGetQuotes</button>

  <button onClick={async () => console.log('thenGetQuotes!!!!', await thenGetQuotes())}>thenGetQuotes</button>
  </>
  )
}
