import { FC } from "react"
export let config;
let logs;
let value;
let name;
export const getServerProps = async () => {

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

await sleep()

const logs = [{ id: 1, message: "Log 1" }]
const name = "From Server Name"

config = { path: "/logs", props: { logs, value: "hello", name } }
};
await getServerProps();
logs = config.props.logs;
value = config.props.value;
name = config.props.name;


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
