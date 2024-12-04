import { Typography } from "antd";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const {Title, Text } = Typography;

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error))
        errorMessage = error.statusText 
    else if(error instanceof Error)
        errorMessage = error.message;
    else if (typeof error === 'string')
        errorMessage = error;
    else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return(
        <div style={{textAlign: 'center'}}>
            <Title>Oops!</Title>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <p><i>{errorMessage}</i></p>
        </div>
    )
}