/* eslint-disable no-console */
import { ActivitiesContext } from './context';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import ButtonDay from './components/ButtonDay';
import TableCtn from './TableCtn';

const { token } = JSON.parse(localStorage.getItem('userData'));
const Auth = { headers: { Authorization: `Bearer ${token}` } };

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [locals, setLocals] = useState([]);
  const [filteredDays, setFilteredDays] = useState([]);

  async function getActivities() {
    let res = await api.get('/event/all', Auth);
    setActivities(res.data);
  }

  async function getLocals() {
    let res = await api.get('/locals', Auth);
    setLocals(res.data);
  }

  useEffect(() => {
    getActivities();
    getLocals();
  }, []);

  return (
    <ActivitiesContext.Provider value={{ getActivities, activities, locals, filteredDays, setFilteredDays }}>

      <ButtonDay />
      <TableCtn />
    </ActivitiesContext.Provider>
  );
}
