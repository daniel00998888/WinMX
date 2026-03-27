<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
const supabase = window.supabase.createClient(
  "https://dakhnqriwbzihlzhtfcb.supabase.co",
  "sb_publishable_rRcNEvZ9n0IEJzTQcK90nQ_5lfwSDYs"
);
</script>
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
