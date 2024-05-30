import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mamestyldmomomogpowe.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbWVzdHlsZG1vbW9tb2dwb3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwOTM3MzEsImV4cCI6MjAzMjY2OTczMX0.wal1daX4Me3etdk2fgt5Cu-DXlcpUxyq2_-JE_8Vl6Q',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbWVzdHlsZG1vbW9tb2dwb3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwOTM3MzEsImV4cCI6MjAzMjY2OTczMX0.wal1daX4Me3etdk2fgt5Cu-DXlcpUxyq2_-JE_8Vl6Q',
  },
});
