import ReactLoading from 'react-loading'

function UiBlocker({
  children,
  block = false,
  loader = {
    type: '' || 'spokes',
    color: '' || '#02ac4e',
    height: '' || 50,
    width: '' || 50,
  },
  loadingText = {
    text: '' || 'Please Wait ...',
    color: '' || '#02ac4e',
    size: '' || '1em',
  },
}) {
  return (
    <div className="blocking-div">
      <div className="pre-loading-div">
        {block && (
          <div className="loader-div">
            <ReactLoading
              type={loader.type}
              color={loader.color}
              height={loader.height}
              width={loader.width}
            />
            <span style={{ color: loadingText.color, size: loadingText.size }}>
              {loadingText.text}
            </span>
          </div>
        )}
        <>{children}</>
      </div>
      <style jsx>{`
        .blocking-div {
          width: 100%;
          position: relative;
          z-index: 999;
          display: block;
        }
        .pre-loading-div {
          display: block;
          max-height: ${block ? `100vh` : ''};
          height: 100%;
          overflow: ${block ? `hidden` : ''};
        }
        .loader-div {
          position: absolute;
          width: 100%;
          min-height: 100%;
          max-height: auto;
          height: 100%;
          background: #f7f7f7;
          opacity: 0.5;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        span {
          margin-top: 2em;
        }
      `}</style>
    </div>
  )
}

export default UiBlocker
