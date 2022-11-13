const ErrorCommponent = ({ error }) => {
    console.log(error, '<<error')
    return <>
        <h2>Something went wrong: </h2>
        <p>{error.message}</p>
    </>
}
export default ErrorCommponent