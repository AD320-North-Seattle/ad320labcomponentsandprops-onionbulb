/**
 * Creates an instruction
 * @param {string} - String to be used as text
 * @returns an ordered list point of the instruction
 */
function Instruction({instruction}) {
    return (
        <>
            <li>{instruction}</li>
        </>
    )
}

export default Instruction