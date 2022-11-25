import { FC } from "react"
import { config } from "../config"
const logs = config.props.logs
const value = config.props.value
const name = config.props.name
const Page: FC = () => {
  return (
    <div>
      <h1>Logs - {name}</h1>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page