import { 
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryCatchGetQuotes, 
  thenCatchGetQuotes
} from './services/promise-me'

export default function App() {
  return (
  <>
  <button onClick={async () => console.log('asyncGetQuotes!!!!', await asyncGetQuotes())}>asyncGetQuotes</button>

  <button onClick={async () => console.log('thenGetQuotes!!!!', await thenGetQuotes())}>thenGetQuotes</button>

  <button onClick={async () => console.log('asyncTryCatchGetQuotes!!!!', await asyncTryCatchGetQuotes())}>asyncTryCatchGetQuotes</button>

  <button onClick={async () => console.log('thenCatchGetQuotes!!!!', await thenCatchGetQuotes())}>thenCatchGetQuotes</button>
  </>
  )
}
