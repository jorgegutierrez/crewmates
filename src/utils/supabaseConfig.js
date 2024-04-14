import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwaregbdvivhgflpsuuh.supabase.co'; // Reemplaza "<your-project-id>" con tu ID de proyecto de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3YXJlZ2Jkdml2aGdmbHBzdXVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjk1NDc3MSwiZXhwIjoyMDI4NTMwNzcxfQ.yl-z9DpU_HIK_HIngLHlXmihlNwU5WmfRAQyVw_e1GU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
