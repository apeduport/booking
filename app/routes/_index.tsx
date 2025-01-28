import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Automated Student Verification`,
      description: `Verify student information in real-time with automated document checks and instant parent notifications.`,
      icon: <i className="las la-user-check"></i>,
    },
    {
      heading: `Smart Room Allocation`,
      description: `Optimize accommodation management with AI-powered room matching and allocation system.`,
      icon: <i className="las la-home"></i>,
    },
    {
      heading: `Secure Payment Processing`,
      description: `Process fees securely with integrated payment gateway and automated receipt generation.`,
      icon: <i className="las la-credit-card"></i>,
    },
    {
      heading: `Real-time Analytics`,
      description: `Track enrollment trends, occupancy rates, and revenue with detailed dashboards and reports.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Parent Communication Hub`,
      description: `Keep parents informed with automated updates on application status, payments and accommodation details.`,
      icon: <i className="las la-comments"></i>,
    },
    {
      heading: `Mobile-First Design`,
      description: `Access and manage bookings on any device with our responsive interface designed for administrators on the go.`,
      icon: <i className="las la-mobile"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Sarah Chen`,
      designation: `Dean of Admissions, International University`,
      content: `EduPort has transformed our enrollment process. We've reduced administrative time by 75% and eliminated booking errors completely.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `James Wilson`,
      designation: `Housing Director, Cambridge College`,
      content: `The smart room allocation feature has been a game-changer. We're now operating at 98% occupancy with zero double-booking incidents.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Maria Rodriguez`,
      designation: `Administrative Head, Global Education Institute`,
      content: `Our staff loves how easy it is to verify documents and communicate with parents. The automated notifications have saved us countless hours.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small institutions starting their digital transformation`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Up to 500 enrollments/year`,
        `Basic analytics`,
        `Email support`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing institutions with multiple departments`,
      monthly: 399,
      yearly: 3990,
      features: [
        `Unlimited enrollments`,
        `Advanced analytics`,
        `24/7 priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solution for large educational networks`,
      monthly: 899,
      yearly: 8990,
      features: [
        `Custom integration`,
        `Dedicated account manager`,
        `SLA guarantee`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How long does it take to implement EduPort?`,
      answer: `Most institutions are up and running within 2 weeks. Our team provides comprehensive onboarding and training support throughout the implementation process.`,
    },
    {
      question: `Can EduPort integrate with our existing systems?`,
      answer: `Yes, EduPort offers API integration capabilities with major student information systems, payment gateways, and communication platforms.`,
    },
    {
      question: `Is student data secure with EduPort?`,
      answer: `Absolutely. We use bank-grade encryption and comply with GDPR, FERPA, and other major data protection regulations.`,
    },
    {
      question: `What kind of support do you provide?`,
      answer: `We offer 24/7 technical support, regular training sessions, and a dedicated account manager for enterprise clients.`,
    },
  ]

  const steps = [
    {
      heading: `Digital Application`,
      description: `Students submit applications and documents through our secure portal`,
    },
    {
      heading: `Automated Verification`,
      description: `System instantly verifies documents and student information`,
    },
    {
      heading: `Smart Allocation`,
      description: `AI matches students with optimal accommodation based on preferences`,
    },
    {
      heading: `Seamless Communication`,
      description: `Automated updates keep all stakeholders informed throughout the process`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Drowning in paperwork and manual data entry`,
    },
    {
      emoji: `😤`,
      title: `Double bookings and allocation mistakes`,
    },
    {
      emoji: `😩`,
      title: `Endless phone calls and emails with parents`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Student Enrollment Process from Chaos to Clarity`}
        subtitle={`Join over 1000+ educational institutions who've eliminated paperwork, prevented booking errors, and reduced administrative time by 70%`}
        buttonText={`Start Free Trial`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/GzXdJU-bookingmanagement-W3hN`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`from satisfied educational institutions`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Leading Institutions`} />
      <LandingPainPoints
        title={`Educational administrators spend 13 hours per week on paperwork - that's 676 hours per year wasted on manual processes`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Efficient Enrollment Management`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Streamline Student Enrollment`}
        subtitle={`Powerful tools designed specifically for educational institutions`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Hundreds of Institutions Already Saving Time and Resources`}
        subtitle={`See how EduPort is transforming enrollment management across the globe`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose the Perfect Plan for Your Institution`}
        subtitle={`Flexible pricing to support institutions of all sizes`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About EduPort`}
        subtitle={`Everything you need to know about streamlining your enrollment process`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Enrollment Process?`}
        subtitle={`Join over 1000 institutions already saving time and resources with EduPort`}
        buttonText={`Start Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
