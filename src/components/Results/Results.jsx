import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    const initalInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(({ year, interest, valueEndOfYear, annualInvestment }) => {
                    const totalInterest = valueEndOfYear - annualInvestment * year - initalInvestment;
                    const totalAmountInvested = valueEndOfYear - totalInterest;
                    return <tr key={year}>
                        <td>{year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );

}