import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('Artes');
  const [weekDay, setWeekDay] = useState('0');
  const [time, setTime] = useState('09:00');

  useEffect(() => {}, [teachers]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await api.get('classes', {
        params: {
          week_day: weekDay,
          subject,
          time,
        },
      });

      setTeachers(res.data);
    } catch (error) {
      console.log(`Erro ao consultar os professores disponíveis! ${error}`);
    }
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name='week_day'
            label='Dia da Semana'
            options={[
              {
                value: '-1',
                label: 'Selecione uma opção',
                disabled: true,
                hidden: true,
              },
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            name='time'
            label='Hora'
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem teacher={teacher} key={teacher.id} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
