"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  TrendingDown,
  AlertTriangle,
  HelpCircle,
  Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // フォーム送信処理（実際の実装では、APIエンドポイントに送信）
    try {
      // 模擬的な送信処理
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      console.log("フォーム送信:", formData)
    } catch (error) {
      console.error("送信エラー:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative">
      {/* 全体固定背景動画 */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/main-visual.mp4" type="video/mp4" />
          {/* フォールバック画像 */}
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="看板制作のイメージ動画"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        {/* 全体オーバーレイ - シンプルな暗いオーバーレイ */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10">
        {/* Header - シンプルな透過背景 */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="シューエイ ロゴ"
                width={200}
                height={67}
                className="h-14 w-auto"
                priority
                quality={100}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-white hover:text-orange-400 transition-colors scroll-smooth">
                サービス
              </Link>
              <Link href="#testimonials" className="text-white hover:text-orange-400 transition-colors scroll-smooth">
                お客様の声
              </Link>
              <Link href="#faq" className="text-white hover:text-orange-400 transition-colors scroll-smooth">
                よくある質問
              </Link>
            </nav>
            <Link href="#contact">
              <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600 border-orange-500">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
          {/* 下部ぼかし効果 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20 h-full flex items-end pb-20">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-white">
                見慣れた風景に、
                <br />
                <span className="text-orange-400">新しい風を。</span>
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed drop-shadow-md text-white/90">
                売上につながるデザインを、設計から施工まで一貫対応で。
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white organic-bg organic-bg-1">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">こんなお悩みはありませんか？</h2>
                <p className="text-xl text-gray-600">多くの経営者が同じ課題に直面しています</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "集客に悩んでいる",
                    description: "店舗の前を通る人はいるのに、なかなかお客様が入ってこない",
                    icon: <TrendingDown className="h-12 w-12 text-red-500" />,
                  },
                  {
                    title: "看板が古くなった",
                    description: "長年使っている看板が色褪せて、お店のイメージダウンになっている",
                    icon: <AlertTriangle className="h-12 w-12 text-blue-500" />,
                  },
                  {
                    title: "どんな看板がいいかわからない",
                    description: "看板を作りたいけど、デザインや材質など何を選べばいいかわからない",
                    icon: <HelpCircle className="h-12 w-12 text-blue-500" />,
                  },
                ].map((problem, index) => (
                  <Card key={index} className="p-8 text-center border-gray-100 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center">
                          {problem.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{problem.title}</h3>
                      <p className="text-gray-600">{problem.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-lg text-gray-700 font-medium">
                  あなただけではありません。
                  <br />
                  <span className="text-orange-600">95%の企業</span>が同様の課題を抱えています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="services" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  シューエイの総合ブランディングサービス
                </h2>
                <p className="text-xl text-white/80">
                  看板制作を中心に、店舗の総合的なブランディング・販促支援をワンストップでご提供します。
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                    >
                      <source src="/videos/service.mp4" type="video/mp4" />
                      {/* フォールバック画像 */}
                      <img
                        src="/placeholder.svg?height=500&width=600"
                        alt="ソリューションのイメージ"
                        className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                      />
                    </video>
                    {/* 動画オーバーレイ効果 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="space-y-6">
                    {[
                      {
                        title: "看板制作・施工",
                        description: "デザインから施工まで一貫対応。LED看板、アクリル看板など幅広く対応",
                      },
                      {
                        title: "店舗リフォーム",
                        description: "看板と合わせた店舗の外観・内装リフォームで統一感のある空間を演出",
                      },
                      {
                        title: "印刷・デザイン制作",
                        description: "チラシ、のぼり、横断幕、販促シールなど販促ツールを一括制作",
                      },
                      {
                        title: "ホームページ制作",
                        description: "看板と連動したWebブランディングで集客力を最大化",
                      },
                      {
                        title: "補助金申請サポート",
                        description: "小規模事業者持続化補助金など、各種補助金の申請をサポートし費用負担を軽減",
                      },
                    ].map((solution, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">{solution.title}</h4>
                          <p className="text-white/80">{solution.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white organic-bg organic-bg-2">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">選ばれる理由</h2>
                <p className="text-xl text-gray-600">他社との圧倒的な差別化ポイント</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users className="h-12 w-12 text-orange-500" />,
                    title: "ワンストップサービス",
                    description: "看板からホームページまで、すべてお任せいただけます",
                    stat: "ALL",
                  },
                  {
                    icon: <Clock className="h-12 w-12 text-orange-500" />,
                    title: "創業35年の信頼",
                    description: "創業35年、7000社以上の豊富な実績で培った確かな技術力",
                    stat: "35年",
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-orange-500" />,
                    title: "補助金申請サポート",
                    description: "各種補助金の申請をサポートし、実質負担を大幅軽減",
                    stat: "2/3",
                  },
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-8 text-center border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2"
                  >
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">{benefit.icon}</div>
                      <div className="text-3xl font-bold text-orange-500">{benefit.stat}</div>
                      <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">お客様の声</h2>
                <p className="text-xl text-white/80">実際にご利用いただいたお客様の成功事例</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "クリーニングオーナー",
                    company: "地域密着型クリーニング店",
                    role: "店主",
                    content:
                      "クリーニング店の伸び悩みを感じており、補助金の対応もしてくれるシューエイさんにリフォームと販促物の対応をして頂きました。リフォーム後は、新規顧客が増え、売上もアップすることが出来ました。ご来店のお客様から「新しくオープンしたの？」と言われるぐらい目を引く店舗になりました。",
                    rating: 5,
                    result: "売上1.7倍",
                    metrics: ["顧客数1.5倍", "新規顧客4.4倍"],
                  },
                  {
                    name: "喫茶店経営者",
                    company: "地域の老舗喫茶店",
                    role: "オーナー",
                    content:
                      "古くなった喫茶店の雰囲気を一新するため、店舗の改装をお願いしました。看板のデザイン変更から、外壁塗装までトータルでご提案いただき、統一感のある素敵なお店に生まれ変わりました。補助金の活用についても丁寧にサポートしていただき、費用の面でも非常に助かりました。新しくなった看板はお客様からの評判もよく、通りがかりの方にも足を止めていただけるようになりました。",
                    rating: 5,
                    result: "補助金活用成功",
                  },
                  {
                    name: "クリーニングオーナー",
                    company: "個人経営クリーニング店",
                    role: "代表",
                    content:
                      "友人の経営者から、リフォームを行って売上アップしたというお話を聞いて、シューエイさんをご紹介頂きました。リフォームを行ったことで、新規客も増え当店も売上をアップさせることが出来ました。",
                    rating: 5,
                    result: "売上アップ",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="p-6 border-gray-800 bg-gray-800 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-white/90 italic">"{testimonial.content}"</p>
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-white">{testimonial.name}</div>
                            <div className="text-sm text-white/70">{testimonial.company}</div>
                            <div className="text-sm text-white/60">{testimonial.role}</div>
                          </div>
                          <div>
                            <Badge className="bg-orange-900 text-orange-100 border-orange-800">
                              {testimonial.result}
                            </Badge>
                            {testimonial.metrics &&
                              testimonial.metrics.map((metric, index) => (
                                <Badge key={index} className="bg-orange-900 text-orange-100 border-orange-800 ml-1">
                                  {metric}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - お客様の声セクションの後に追加 */}
        <section className="py-20 bg-white organic-bg organic-bg-portfolio">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">制作事例</h2>
                <p className="text-xl text-gray-600">ビフォーアフターで見る、劇的な変化の実例</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {[
                  {
                    title: "小松屋クリーニング店の看板リニューアル",
                    category: "看板制作・店舗改装",
                    description:
                      "老朽化した看板を最新のデザインに一新。明るく清潔感のある外観で新規顧客が大幅に増加しました。",
                    beforeImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E6%9D%BE%E5%B1%8B%E5%85%B1%E5%92%8C%E5%BA%97-4lkBWFroNuqbnZSbMvajNChPbJnfEY.png",
                    afterImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E6%9D%BE%E5%B1%8B%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0web%E7%94%A8-y5z03iJkdT3oFc6YJfE4onxgxit5KJ.png",
                    results: ["新規顧客4.4倍", "売上1.7倍", "認知度向上"],
                  },
                  {
                    title: "MR.CHAPLIN カフェの総合リブランディング",
                    category: "店舗リフォーム・看板制作",
                    description:
                      "古い緑色の看板から、モダンで洗練されたブラックデザインに一新。ブランドイメージを大幅に向上させました。",
                    beforeImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BEFORE_chaplin.png-SbrepJrT84fmTHi94MpwGIaE3Hj6vF.jpeg",
                    afterImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFTERchapli-idaFu38qtcDVpqPoV7u5yu7Na0CtEQ.png",
                    results: ["ブランド力強化", "客単価向上", "SNS話題性向上"],
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      {/* Before/After Image Comparison */}
                      <div className="relative h-64 bg-gray-100 overflow-hidden group">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 relative overflow-hidden">
                            <img
                              src={project.beforeImage || "/placeholder.svg"}
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              BEFORE
                            </div>
                          </div>
                          <div className="w-1/2 relative overflow-hidden">
                            <img
                              src={project.afterImage || "/placeholder.svg"}
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              AFTER
                            </div>
                          </div>
                        </div>
                        {/* Center divider */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result, resultIndex) => (
                          <Badge key={resultIndex} className="bg-green-100 text-green-800 border-green-200">
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">あなたの店舗も劇的に変わります</h3>
                <p className="text-lg text-gray-600 mb-8">無料相談で、あなたの店舗に最適なプランをご提案いたします</p>
                <Link href="#contact">
                  <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3">
                    無料相談を申し込む
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white organic-bg organic-bg-3">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">よくある質問</h2>
                <p className="text-xl text-gray-600">お客様からよくいただくご質問にお答えします</p>
              </div>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      question: "どのくらいの期間で完成しますか？",
                      answer:
                        "デザイン確定後、通常2-3週間で完成いたします。お急ぎの場合は最短1週間での対応も可能です。",
                    },
                    {
                      question: "費用はどのくらいかかりますか？",
                      answer:
                        "看板のサイズや材質により異なりますが、10万円からご対応しております。無料お見積もりで詳細をご提示いたします。",
                    },
                    {
                      question: "どのような看板が作れますか？",
                      answer:
                        "LED看板、アクリル看板、ステンレス看板、木製看板など、様々な材質・デザインに対応しております。",
                    },
                    {
                      question: "設置工事も依頼できますか？",
                      answer:
                        "はい、デザインから設置工事まで一貫してお任せいただけます。電気工事が必要な場合も対応可能です。",
                    },
                    {
                      question: "メンテナンスはしてもらえますか？",
                      answer: "設置後のメンテナンスや修理も承っております。定期点検サービスもご用意しております。",
                    },
                    {
                      question: "補助金は本当に使えますか？",
                      answer:
                        "はい、小規模事業者持続化補助金、事業再構築補助金、IT導入補助金など、様々な補助金が看板制作や店舗改装に活用できます。申請から採択まで全面的にサポートいたします。",
                    },
                    {
                      question: "補助金申請にはどのくらい時間がかかりますか？",
                      answer:
                        "補助金の種類により異なりますが、申請から結果発表まで2-6ヶ月程度です。申請書類の作成は弊社でサポートいたしますので、お客様の負担は最小限です。",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 organic-bg organic-bg-4">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="container mx-auto px-4">
            <div className="section-content">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
                  <p className="text-lg text-gray-600">
                    看板制作・店舗リフォームに関するご相談は、お気軽にお問い合わせください
                  </p>
                </div>

                {/* お問い合わせの流れ */}
                <Card className="mb-12">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800 text-center">お問い合わせの流れ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          1
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">お問い合わせ</h4>
                        <p className="text-sm text-gray-600">フォームまたはお電話でご連絡ください</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          2
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">ヒアリング</h4>
                        <p className="text-sm text-gray-600">ご要望を詳しくお聞かせください</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          3
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">現地調査・お見積もり</h4>
                        <p className="text-sm text-gray-600">無料で現地調査とお見積もりを作成</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          4
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">ご提案・契約</h4>
                        <p className="text-sm text-gray-600">最適なプランをご提案いたします</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {isSubmitted ? (
                  <div className="max-w-2xl mx-auto text-center">
                    <Card className="p-12">
                      <CardContent className="space-y-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Send className="h-10 w-10 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">お問い合わせありがとうございます</h3>
                        <p className="text-lg text-gray-600">
                          お問い合わせを受け付けました。
                          <br />
                          担当者より2営業日以内にご連絡いたします。
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          size="lg"
                          className="bg-orange-500 text-white hover:bg-orange-600"
                        >
                          新しいお問い合わせ
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-1 gap-8">
                    {/* Contact Form */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl text-gray-800">お問い合わせフォーム</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">お名前 *</Label>
                              <Input
                                id="name"
                                placeholder="山田 太郎"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">会社名・店舗名</Label>
                              <Input
                                id="company"
                                placeholder="株式会社○○"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">電話番号 *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="052-891-5736"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">メールアドレス *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="service">ご希望のサービス</Label>
                              <Select onValueChange={(value) => handleInputChange("service", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="サービスを選択してください" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="signage">看板制作・施工</SelectItem>
                                  <SelectItem value="renovation">店舗リフォーム</SelectItem>
                                  <SelectItem value="printing">印刷・デザイン制作</SelectItem>
                                  <SelectItem value="website">ホームページ制作</SelectItem>
                                  <SelectItem value="subsidy">補助金申請サポート</SelectItem>
                                  <SelectItem value="consultation">無料相談</SelectItem>
                                  <SelectItem value="other">その他</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="budget">ご予算</Label>
                              <Select onValueChange={(value) => handleInputChange("budget", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="ご予算を選択してください" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="under-100k">10万円未満</SelectItem>
                                  <SelectItem value="100k-300k">10万円〜30万円</SelectItem>
                                  <SelectItem value="300k-500k">30万円〜50万円</SelectItem>
                                  <SelectItem value="500k-1m">50万円〜100万円</SelectItem>
                                  <SelectItem value="over-1m">100万円以上</SelectItem>
                                  <SelectItem value="undecided">未定</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">お問い合わせ内容 *</Label>
                            <Textarea
                              id="message"
                              placeholder="ご質問やご要望をお聞かせください"
                              rows={6}
                              value={formData.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              required
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="privacy"
                              checked={formData.privacy}
                              onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                              required
                            />
                            <Label htmlFor="privacy" className="text-sm">
                              個人情報の取り扱いについて同意します *
                            </Label>
                          </div>

                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-orange-500 text-white hover:bg-orange-600"
                            disabled={isSubmitting || !formData.privacy}
                          >
                            {isSubmitting ? "送信中..." : "お問い合わせを送信"}
                            <Send className="ml-2 h-5 w-5" />
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">有限会社シューエイ</div>
                <p className="text-gray-300">
                  代表取締役 山下裕二
                  <br />
                  看板制作を中心とした店舗ブランディングのプロフェッショナル
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">サービス</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="#services" className="hover:text-orange-300 transition-colors scroll-smooth">
                      看板制作・施工
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-orange-300 transition-colors scroll-smooth">
                      店舗リフォーム
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-orange-300 transition-colors scroll-smooth">
                      印刷・デザイン制作
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-orange-300 transition-colors scroll-smooth">
                      ホームページ制作
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-orange-300 transition-colors scroll-smooth">
                      補助金申請サポート
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">会社情報</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="#" className="hover:text-orange-300 transition-colors">
                      会社概要
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="hover:text-orange-300 transition-colors scroll-smooth">
                      実績・事例
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">お問い合わせ</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:052-891-5736" className="hover:text-orange-300 transition-colors">
                      052-891-5736
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>info@u-shuei.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <div>〒468-0045</div>
                      <div>愛知県名古屋市天白区野並1丁目1番2号</div>
                      <div>コーポ華102号</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <div>平日 9:00〜18:00</div>
                      <div>土曜 9:00〜17:00</div>
                      <div className="text-sm">日曜・祝日は休業</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 有限会社シューエイ. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
