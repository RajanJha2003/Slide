import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
    },
  ]
  return (
    <main>
      <section className='relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg'>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative"><div className="container px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className='h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold '>li</div>
            <span className='text-xl font-semibold text-primary-foreground '>Slide</span>
          </div>
          <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-white text-primary">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>
      </div>

      </div>
      </section>

    </main>
  )
}

export default page