// import logo from './logo-.png';
import '../App.css';
// import Foot from './Foot';
const PrintComponent = ({ children }) => {
    const printAction = () => {
        window.print()
    }
    return (
        <>
            

            <thead>
                <header className='h-32 '>
                <button className={"print-preview-button print-d-none"} onClick={printAction}>Print</button>
                </header>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {children}
                    </td>
                </tr>
            </tbody>
            <tfoot className="table-footer">
                {/* <Foot /> */}
            </tfoot>
            <table className="print-component"></table>

        </>
    )
}
export default PrintComponent