import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwaregbdvivhgflpsuuh.supabase.co'; // Reemplaza "<your-project-id>" con tu ID de proyecto de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3YXJlZ2Jkdml2aGdmbHBzdXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTQ3NzEsImV4cCI6MjAyODUzMDc3MX0.833eYeJh0TM3dxqfmolJC1YeNB9Wxo_kRTTEB82VTGY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
