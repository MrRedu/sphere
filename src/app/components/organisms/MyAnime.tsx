
export const MyAnime = ({ data }) => {
  return (
    <>
      <h2>{`</MyAnime>`}</h2>
      {data}
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  )
}
