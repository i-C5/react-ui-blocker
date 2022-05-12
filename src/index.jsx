import ReactLoading from 'react-loading'

function UiBlocker({ children, block = false }) {
  return (
    <div
      className="blocking-div"
      style={{
        position: block ? 'fixed' : 'relative',
      }}
    >
      {block ? (
        <div className="loader-div">
          <ReactLoading
            type="spokes"
            color="#02ac4e"
            height={100}
            width={100}
          />
          <p>Please Wait ....</p>
        </div>
      ) : null}
      <>{children}</>
      <style jsx>{`
        .blocking-div {
          width: 100%;
          min-height: 100vh;
          max-height: auto;
          height: 100%;
          z-index: 999;
        }
        .loader-div {
          position: fixed;
          width: 100%;
          min-height: 100vh;
          max-height: 100vh;
          height: 100vh;
          background: #f7f7f7;
          opacity: 0.71;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        p {
          margin-top: 2em;
          color: #02ac4e;
        }
      `}</style>
    </div>
  )
}

export default UiBlocker
