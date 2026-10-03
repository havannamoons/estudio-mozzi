-- ============================================================
-- TABLA DE VENTAS
-- ============================================================
-- Pegá todo esto en Supabase → SQL Editor → Run.
-- Se puede correr más de una vez sin romper nada.
--
-- Para qué: hasta ahora, cuando alguien compraba no quedaba registro
-- de la compra en ningún lado. El panel mostraba "pendientes", pero
-- ahí aparece todo el que creó una cuenta, haya pagado o no, así que
-- no servía para saber quién compró.
--
-- Esta tabla la escribe SOLO el webhook de Mercado Pago, con la clave
-- service_role. Nadie más puede insertar.
-- ============================================================

create table if not exists public.ventas (
  id          uuid primary key default gen_random_uuid(),
  perfil_id   uuid,
  email       text,
  monto       numeric,
  metodo      text,
  -- El id del pago en Mercado Pago. Es UNIQUE a propósito: MP reintenta
  -- el aviso si no le respondés rápido, y sin esto la misma compra se
  -- anotaría varias veces.
  pago_id     text unique,
  creado_en   timestamptz not null default now()
);

create index if not exists ventas_creado_en_idx
  on public.ventas (creado_en desc);

alter table public.ventas enable row level security;

-- Solo la admin puede leer las ventas. Nadie puede insertar ni borrar
-- desde el navegador: el webhook escribe con service_role, que pasa por
-- encima de estas políticas.
drop policy if exists "admin ve las ventas" on public.ventas;
create policy "admin ve las ventas"
  on public.ventas for select
  using (auth.jwt() ->> 'email' = 'havannamoons@gmail.com');

-- ============================================================
-- Para comprobar que quedó bien:
--   select * from public.ventas order by creado_en desc;
-- Al principio da cero filas. Se llena sola con la primera compra
-- hecha desde la app con el cobro automático prendido.
-- ============================================================
