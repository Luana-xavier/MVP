import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Calendario() {
    const [date, setDate] = useState(new Date());
    return (
        <div>
         
         <form>
            

<div className='horarios'>

<span className='bold'><h2>Horários disponíveis para o dia :{' '}{date.toLocaleDateString()}</h2><br/></span><br/>

<span id='hora'>09:00 <input type="checkbox" /></span>

<span id='hora'>10:00 <input type="checkbox"/></span>

<span id='hora'>11:00 <input type="checkbox"/></span>

<span id='hora'>14:00 <input type="checkbox"/></span>
  
<span id='hora'>15:00 <input type="checkbox"/></span>

<span id='hora'>16:00 <input type="checkbox"/></span>

<span id='hora'>17:00 <input type="checkbox"/></span>

</div>

</form>

    
         <form className='calend'>

                <Calendar className='calendArio' onChange={setDate}
                    defaultView="" value={date} minDetail='day' maxDetail='month' />
                
                
                
            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {date[2024].toLocaleDateString()}
                    &nbsp;|&nbsp;
                    <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
            ) : (""
            )
        }
</form>

</div>
    
)};
export default Calendario

