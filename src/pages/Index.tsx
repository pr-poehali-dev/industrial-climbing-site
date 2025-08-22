import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-secondary">АльпТех</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#safety" className="text-muted-foreground hover:text-primary transition-colors">Безопасность</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Icon name="Phone" size={16} />
                <span>+7 (910) 703-23-51</span>
              </div>
              <Button size="sm">Заказать звонок</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                Профессиональная команда промышленных альпинистов
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                ВЫСОТНЫЕ РАБОТЫ В ТУЛЕ И БЛИЖАЙШИХ ОБЛАСТЯХ
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-lg">Гарантируем качество и ответственный подход к работе</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-lg">Принимаем грамотные инженерные решения в самых сложных ситуациях</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                ПОЗВОНИТЬ
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-2xl backdrop-blur-sm">
                <img 
                  src="/img/df4ec66e-5de0-42de-9a2a-ba58fc0ec444.jpg" 
                  alt="Промышленный альпинист на высоте"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр высотных работ с использованием современного оборудования и технологий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
                <CardTitle>Фасадные работы</CardTitle>
                <CardDescription>
                  Утепление, ремонт и отделка фасадов зданий любой сложности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-primary" />
                </div>
                <CardTitle>Кровельные работы</CardTitle>
                <CardDescription>
                  Монтаж, ремонт и обслуживание кровли на высотных объектах
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle>Электромонтажные работы</CardTitle>
                <CardDescription>
                  Установка и обслуживание электрооборудования на высоте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" size={24} className="text-primary" />
                </div>
                <CardTitle>Герметизация швов</CardTitle>
                <CardDescription>
                  Профессиональная герметизация межпанельных швов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Paintbrush" size={24} className="text-primary" />
                </div>
                <CardTitle>Покрасочные работы</CardTitle>
                <CardDescription>
                  Окраска фасадов и конструкций на любой высоте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Аварийные работы</CardTitle>
                <CardDescription>
                  Срочное устранение аварийных ситуаций на высотных объектах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Безопасность - наш приоритет
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы используем только сертифицированное оборудование и строго соблюдаем все требования безопасности при выполнении высотных работ.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Award" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Сертифицированные специалисты</h3>
                    <p className="text-muted-foreground">Все наши альпинисты имеют необходимые допуски и регулярно проходят обучение</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ShieldCheck" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Страхование ответственности</h3>
                    <p className="text-muted-foreground">Полная страховка от несчастных случаев и материального ущерба</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Settings" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Современное оборудование</h3>
                    <p className="text-muted-foreground">Используем только проверенное и сертифицированное снаряжение</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 rounded-2xl">
                <img 
                  src="/img/17b59188-ae8c-4343-a4bb-54dac31becc2.jpg" 
                  alt="Безопасное оборудование для промышленного альпинизма"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Готовы обсудить ваш проект? Оставьте заявку или позвоните нам прямо сейчас.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">+7 (910) 703-23-51</p>
                    <p className="text-sm opacity-75">Основной номер</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">+7 (902) 753-07-09</p>
                    <p className="text-sm opacity-75">Дополнительный номер</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Тула и область</p>
                    <p className="text-sm opacity-75">Зона обслуживания</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Номер телефона" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Описание работ" 
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/95 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">АльпТех</h3>
              <p className="text-white/80">
                Профессиональные услуги промышленного альпинизма в Туле и области. 
                Безопасность и качество - наши главные принципы.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Фасадные работы</li>
                <li>Кровельные работы</li>
                <li>Электромонтаж</li>
                <li>Герметизация</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (910) 703-23-51</p>
                <p>+7 (902) 753-07-09</p>
                <p>Тула и область</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 АльпТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}