import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Bullet = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={20}
        height={21}
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M0 .5h20v20H0z" />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="scale(.05)" />
            </Pattern>
            <Image
                xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAUABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+NzQ7LT9R1fTrHVtZt/D2mXV3DFf63d2moX8Gl2jMPPu3sdLtrvULsxRhjHbW0DPNLsjZ4UZ5o/2W1f8A4JwfCjT/ANlP48ePtF8a6x8RfHXw5+GHwx/aF+FXxD8FWkum+H/iX8LPHr6na+I9N1bwJq+oaxcw/wDCvLnw/rkPibWtL1XSNS8P3yRWmuaL52nSWus/mn+z38bX+CeteObqP4ZfCv4nSfEH4c6/8NUtPivotvq+l+GG8RXOmzDxZoMl3eWNtpXiPTDp/lWWqTzrFbwXVyHZVYsP1y1r9nKD4Kfs7fHHxdJ+0r43lf8AZx+Hvwn1zxFo3wHl8D6F8ONT+J/x2tJPCmk+EPCGq6Vp+ti6Tw3Jd6TD45+Kcer3us+KYNR1RY/D+kzWpuLr8fwdOnKFWUqSrWp1eZt8jo2pzaknKXLJqMZVVypSXsrOVpWf75jq1WFSjGNaVC9SlyJR51XvWoxcWox5oJynGg+aXJJVublbipR/A6iiivPPUCu2HxK+IK+Af+FVp408TRfDVtfk8VS+A4NZvoPCd14lkt7e1Ov3uhQzJp19q6WtpbW0OoXkE91bwQpDBLHGNtFFNNq9m1dWdna6e6fdPsJpO10nZpq6Ts1s1fZro1qjiaKKKQz/2Q=="
                id="b"
                width={20}
                height={20}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default Bullet
