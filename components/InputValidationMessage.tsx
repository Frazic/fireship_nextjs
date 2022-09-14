/**
 * Reusable component that displays different messages depending on validity of value
 *
 * @param props:
 *      value= value being validated
 *
 *      valueName= what is this value called (title, username, ...)
 *
 *      isValid= boolean indicating validity of value
 *
 *      loading= boolean indicating that we are waiting for validation
 * @returns paragraph
 */
export default function InputValidationMessage({ value, valueName, isValid, loading }) {
    if (!value) {
        return <p>Waiting for input</p>
    } else if (loading) {
        return <p>Checking...</p>;
    } else if (isValid) {
        return <p className="text-success">{'"'}{value}{'"'} is available!</p>;
    } else if (value && !isValid) {
        return <p className="text-danger">That {valueName.toLowerCase()} is taken :c</p>;
    } else {
        return <p></p>;
    }
}