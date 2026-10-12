ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS subscription_id text;
ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS customer_id text;
UPDATE public.subscriptions SET subscription_id = paddle_subscription_id, customer_id = paddle_customer_id WHERE subscription_id IS NULL;
ALTER TABLE public.subscriptions ALTER COLUMN paddle_subscription_id DROP NOT NULL;
ALTER TABLE public.subscriptions ALTER COLUMN paddle_customer_id DROP NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS subscriptions_subscription_id_key ON public.subscriptions(subscription_id);
COMMENT ON COLUMN public.subscriptions.paddle_subscription_id IS 'DEPRECATED: replaced by subscription_id';
COMMENT ON COLUMN public.subscriptions.paddle_customer_id IS 'DEPRECATED: replaced by customer_id';