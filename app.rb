require 'sinatra'
require 'i18n'
require 'sinatra/reloader' if development?
require "better_errors" if development?


# Configuracion
configure do
  I18n.load_path = Dir[File.join(settings.root, 'locales', '*.yml')]
end

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__

end


#Globales
before do
# @investor_cloud_path ="http://cdn.investorcloud.net/GIS"

end

before '/:locale/*' do
  I18n.locale = params[:locale]
end

before '/' do
  I18n.locale = :es
end

before '/:locale' do
  I18n.locale = params[:locale]
end

get '/' do
  @menuNumber = 0
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home'}
  erb :"es/vistas/independientes/index"
  # erb :"es/vistas/independientes/index", :layout => :"es/layouts/application"

end


=begin
get '/es' do
  @menuNumber = 0
  @titulo = "GIS"
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"/es/layouts/index", :layout => :"es/layouts/application"
end
=end


# Nombres de Menues


$menuNamesEn=['menu1', 'menu2', 'menu3', "menu4", "menu5"]
$menuNamesEs=['menu1', 'menu2', 'menu3', "menu4", "menu5"]


# Menu 1


get '/:locale/acerca_de_nosotros' do
  @data={:tituloES => 'Acerca de nosotros', :tituloEn => "TRADUCIRRRR", :menuNumber => 1, :submenuTitle => 'Servicios Integrales',:submenuTitleEn =>'Servicios Integrales',
         :descripcionES => 'Una firma con larga tradición dedicada a la práctica de casi todas las áreas del derecho en diversos ramos, que ofrece servicios integrales a personas físicas, grupos empresariales e instituciones, tanto en el sector privado como en el público y no gubernamental.
', :descripcionEN => 'Description TRADUCIRRRR'}

  erb (I18n.locale.to_s+"/vistas/menu-1/acerca_de_nosotros").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/historia' do
  @data={:tituloES => 'Historia', :tituloEn => "TRADUCIRRRR", :menuNumber => 1,:submenuTitle => '',:submenuTitleEn =>'',
         :descripcionES => 'Descripcion Historia', :descripcionEN => 'Description TRADUCIRRRR'}

  erb (I18n.locale.to_s+"/vistas/menu-1/historia").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


# Menu 2

get '/:locale/areas-y-sectores' do
  @menuNumber = 2
  @data = {
      :tituloES => 'Áreas y Sectores', :tituloEn => 'Areas and sectors', :menuNumber => 2,:submenuTitle => '',:submenuTitleEn =>'',
      :descripcionES => 'Más de mil clientes activos nos confían permanentemente sus proyectos y retos, y hemos acompañado a muchos de ellos durante más de sesenta años. Nuestra dedicación y compromiso con la preparación y la especialización continuas nos permiten prestar servicios legales a través de las siguientes prácticas:',
      :descripcionEN => 'Description TRADUCIRRRR'
  }
  erb (I18n.locale.to_s+'/vistas/menu-2/areas-y-sectores').to_sym, :layout => (I18n.locale.to_s+'/layouts/content').to_sym

end


# Menu 3


# Menu 4


# Menu 5


get '/:locale/prensa' do
  @menuNumber = 5
  @data={:tituloES => 'Prensa', :tituloEn => 'Press', :menuNumber => 5,:submenuTitle => 'Noticias',:submenuTitleEn =>'News',
         :descripcionES => '“A Mexican starlwart and a full-service firm of considerable established prestige in the market.”
<br/>-Latin Lawyer- ', :descripcionEN => '“A Mexican starlwart and a full-service firm of considerable established prestige in the market.”
<br/>-Latin Lawyer- '}

  erb (I18n.locale.to_s+'/vistas/menu-5/prensa').to_sym, :layout => (I18n.locale.to_s+'/layouts/content').to_sym

end


# Independientes


# HELPER

=begin


helpers do


  # Cambiar idioma

  def change_language
    if request.path_info=="/"
      return "/en"

    elsif I18n.locale == :es
      return request.path_info.sub('es', 'en')

    elsif  I18n.locale == :en
      return request.path_info.sub('en', 'es')

    end
  end


  # Imprimir menu

  def actual_menu num
    if num == @data[:menuNumber]
      @class= "panel-collapse in"

    else
      @class = "panel-collapse collapse"
    end

  end

  # Link a rutas externas

  def ruta_externa
    @base = "http://www.gis3.com"

    if I18n.locale == :es
      return @base + '/espanol'

    elsif I18n.locale == :en
      return @base + '/english'

    end

  end


#   abreviacion del I18n.t

  def t(*args)
    I18n.t(*args)
  end



end

=end
