export const StyledBox = (props, {classNames}) => {
    return (
        <div className={`flex flex-col lg:flex-row justify-between ${classNames}`}>
            {props.children}
        </div>
    )
}