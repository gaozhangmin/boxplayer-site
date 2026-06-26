create table if not exists public.app_subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  creem_customer_id text,
  creem_subscription_id text,
  creem_product_id text,
  status text not null default 'free',
  current_period_end timestamptz,
  is_pro boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.app_subscriptions enable row level security;

create policy "Users can read their own subscription"
on public.app_subscriptions
for select
to authenticated
using ((select auth.uid()) = user_id);

grant select on public.app_subscriptions to authenticated;
grant select, insert, update on public.app_subscriptions to service_role;
