import React, {useState} from 'react';
import './DataTable.css';
import DataRecords from "./DataRecords.json";

const DataTable = ({data}) => {

    const [records, setRecords] = useState(DataRecords);
    
    return (
        <div class = "Table">
            <table>
                <thead class="fixed-header">
                    <tr>
                        <th>date</th>
                        <th>state</th>
                        <th>death</th>
                        <th>deathConfirmed</th>
                        <th>deathIncrease</th>
                        <th>deathProbable</th>
                        <th>hospitalized</th>
                        <th>hospitalizedCumulative</th>
                        <th>hospitalizedCurrently</th>
                        <th>hospitalizedIncrease</th>
                        <th>inIcuCumulative</th>
                        <th>inIcuCurrently</th>
                        <th>negative</th>
                        <th>negativeIncrease</th>
                        <th>negativeTestsAntibody</th>
                        <th>negativeTestsPeopleAntibody</th>
                        <th>negativeTestsViral</th>
                        <th>onVentilatorCumulative</th>
                        <th>onVentilatorCurrently</th>
                        <th>positive</th>
                        <th>positiveCasesViral</th>
                        <th>positiveIncrease</th>
                        <th>positiveScore</th>
                        <th>positiveTestsAntibody</th>
                        <th>positiveTestsAntigen</th>
                        <th>positiveTestsPeopleAntibody</th>
                        <th>positiveTestsPeopleAntigen</th>
                        <th>positiveTestsViral</th>
                        <th>recovered</th>
                        <th>totalTestEncountersViral</th>
                        <th>totalTestEncountersViralIncrease</th>
                        <th>totalTestResults</th>
                        <th>totalTestResultsIncrease</th>
                        <th>totalTestsAntibody</th>
                        <th>totalTestsAntigen</th>
                        <th>totalTestsPeopleAntibody</th>
                        <th>totalTestsPeopleAntigen</th>
                        <th>totalTestsPeopleViral</th>
                        <th>totalTestsPeopleViralIncrease</th>
                        <th>totalTestsViral</th>
                        <th>totalTestsViralIncrease</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record)=> (                    
                    <tr key={record.user_id}>
                        <td>{record.c_date}</td>
                        <td>{record.c_state}</td>
                        <td>{record.c_death}</td>
                        <td>{record.c_deathconfirmed}</td>
                        <td>{record.c_deathincrease}</td>
                        <td>{record.c_deathproprobable}</td>
                        <td>{record.c_hospitalized}</td>
                        <td>{record.c_hospitalizedcumulative}</td>
                        <td>{record.c_hospitalizedcurrently}</td>
                        <td>{record.c_hospitalizedincrease}</td>
                        <td>{record.c_inlcucumulative}</td>
                        <td>{record.c_inlcucurrently}</td>
                        <td>{record.c_negative}</td>
                        <td>{record.c_negativeincrease}</td>
                        <td>{record.c_neagtivetestsantibody}</td>
                        <td>{record.c_negatuvetestspeopleantibody}</td>
                        <td>{record.c_negativetestsviral}</td>
                        <td>{record.c_onventilatorcumulative}</td>
                        <td>{record.c_onventilatorcurrently}</td>
                        <td>{record.c_positive}</td>
                        <td>{record.c_positivecasesviral}</td>
                        <td>{record.c_positiveincrease}</td>
                        <td>{record.c_positivescore}</td>
                        <td>{record.c_positivetestsantibody}</td>
                        <td>{record.c_positivetestsantigen}</td>
                        <td>{record.c_positivetestspeopleantibody}</td>
                        <td>{record.c_positivetestspeopleantigen}</td>
                        <td>{record.c_positivetestsviral}</td>
                        <td>{record.c_recovered}</td>
                        <td>{record.c_totaltestencountersviral}</td>
                        <td>{record.c_totaltestencountersviralincrease}</td>
                        <td>{record.c_totaltestresults}</td>
                        <td>{record.c_totaltestresultsincrease}</td>
                        <td>{record.c_totaltestsantibody}</td>
                        <td>{record.c_totaltestsantigen}</td>
                        <td>{record.c_totaltestspeopleantibody}</td>
                        <td>{record.c_totaltestspeopleantigen}</td>
                        <td>{record.c_totaltestspeopleviral}</td>
                        <td>{record.c_totaltestspeopleviralincrease}</td>
                        <td>{record.c_totaltestsviral}</td>
                        <td>{record.c_totaltestsviralincrease}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable