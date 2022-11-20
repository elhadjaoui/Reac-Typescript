type status = {
    message : 'loading' | 'success' | 'error' 
}

export const Status = (params:status) =>
{
    let message
    if (params.message === 'loading')
        message = 'Loading..'
    else if (params.message === 'success')
        message = 'Data fetched successfuly'
    else if (params.message === 'error')
        message = 'Error fetching data'
    return(
        <div>
            <h2>{message}</h2>
        </div>
    )
}