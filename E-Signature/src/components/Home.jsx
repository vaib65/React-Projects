

function Home({classes,text}) {
  return (
      <>
          <h1 className={!classes ?"Home  text-center ": classes}>
              {!text ? "title" : text}
          </h1>
      </>
  )
}

export default Home
