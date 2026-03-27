<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const supabaseUrl = 'https://dakhnqriwbzihlzhtfcb.supabase.co';
const supabaseKey = 'sb_publishable_rRcNEvZ9n0IEJzTQcK90nQ_5lfwSDYs';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Insertar usuario
async function crearUsuario() {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      { nombre: 'Daniel', saldo: 1000 }
    ]);

  console.log(data, error);
}

// Obtener usuarios
async function obtenerUsuarios() {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  console.log(data);
}
</script>
