import React from 'react'
import Stripe from 'stripe'
import { currentUser } from '@clerk/nextjs'
import { db } from '@/lib/db'
import BillingDashboard from './_components/billing-dashboard'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Billing = async (props: Props) => {
  const { session_id } = props.searchParams ?? {
    session_id: '',
  }
  if (session_id) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      typescript: true,
      apiVersion: '2023-10-16',
    })

    const session = await stripe.checkout.sessions.listLineItems(session_id)
    const user = await currentUser()
    if (user) {
      await db.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          tier: session.data[0].description,
          credits:
            session.data[0].description == 'Unlimited'
              ? 'Unlimited'
              : session.data[0].description == 'Pro'
              ? '100'
              : '10',
        },
      })
    }
  }

  return (
    <div className="flex flex-col  rounded-tl-3xl">
      <h1 className="text-2xl sticky top-0 rounded-tl-3xl p-4 bg-background/50 backdrop-blur-lg flex items-center   border-b z-10">
        <span>Billing</span>
      </h1>
      <section className='max-w-[1400px] mx-auto w-full mt-1.5  '>
      <div>
        <BillingDashboard />
      </div>
      {/* Rest of the page */}
      </section>
    </div>
  )
}

export default Billing
