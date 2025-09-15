function LoadingStatus({theme}) {
    return <div className="loading-container">
        <h2>Generating Your {theme} Story</h2>
        <div className="loading-animation">
            <div className="spinner">

            </div>
        </div>
        <p className="loading-info">
            Please wait while story is being generated...
        </p>
    </div>
}

export default LoadingStatus;