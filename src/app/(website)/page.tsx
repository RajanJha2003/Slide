import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const plans = [
    {
      name: 'Essential',
      description: 'For creators starting their journey',
      price: '$0',
      billing: 'Forever free',
      features: [
        'Smart response automation for up to 100 comments/month',
        'Basic audience engagement analytics',
        'Community management tools',
        'Instagram content suggestions',
        'Email support',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For serious creators and businesses',
      price: '$99',
      billing: 'per month',
      features: [
        'Unlimited automated responses',
        'Advanced AI-powered engagement strategies',
        'Detailed analytics and ROI tracking',
        'Custom response templates',
        'Priority 24/7 support',
        'White-label reports',
        'Multi-account management',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d_1px,transparent_1px),linear-gradient(to_bottom,#1a365d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Navigation */}
        <div className="relative">
          <div className="container px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center font-bold text-white">
                  Sl
                </div>
                <span className="text-2xl font-bold text-white">Slide</span>
              </div>
              
              <nav className="hidden space-x-8 text-sm font-medium text-blue-100 md:block">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
              </nav>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800/50">
                <Link href="/dashboard">Login</Link>
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Start Free
                </Button>
              </div>
            </div>

            {/* Hero Section */}
            <div className="mx-auto mt-24 max-w-4xl text-center">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                Automate & Scale Your
                <span className="text-blue-400"> Instagram Growth</span>
              </h1>

              <p className="mt-8 text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Transform your Instagram presence with AI-powered engagement. 
                Connect authentically with your audience, boost engagement, and 
                convert followers into customers - all on autopilot.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-6 text-lg"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-100 hover:bg-blue-900/50 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 w-full mt-16 rounded-xl overflow-hidden">
              <Image
                src="/Ig-creators.png"
                alt="Instagram creators using Slide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50" id="pricing">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Choose the perfect plan to elevate your Instagram presence. 
              Start free, upgrade when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col justify-between border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="grid gap-6">
                  <div>
                    <div className="text-5xl font-bold text-slate-900">
                      {plan.price}
                    </div>
                    <div className="text-slate-600 mt-2">
                      {plan.billing}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full py-6 text-lg ${
                      plan.popular 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}