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
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"es/vistas/independientes/index"
  # erb :"es/vistas/independientes/index", :layout => :"es/layouts/application"

end


get '/es' do
  @menuNumber = 0
  # @titulo = "SANTAMARINA & STETA"
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"es/vistas/independientes/index"
end


# Nombres de Menues

  $menuNamesEn=['menu1', 'menu2', 'menu3', "menu4", "menu5" ]
  $menuNamesEs=['menu1', 'menu2', 'menu3', "menu4", "menu5"]



# Menu 1


get '/:locale/acerca_de_nosotros' do
  @data={:tituloES => 'Acerca de nosotros', :tituloEn => "TRADUCIRRRR", :menuNumber => 1,
         :descripcionES => 'Descripcion de la pagina', :descripcionEN => 'Description TRADUCIRRRR'}

  erb (I18n.locale.to_s+"/vistas/menu-1/acerca_de_nosotros").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/historia' do
  @data={:tituloES => 'Historia', :tituloEn => "TRADUCIRRRR", :menuNumber => 1,
         :descripcionES => 'Descripcion Historia', :descripcionEN => 'Description TRADUCIRRRR'}

  erb (I18n.locale.to_s+"/vistas/menu-1/historia").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


# Menu 2

get '/:locale/areas-y-sectores' do
  @menuNumber = 2
  @data = {
      :tituloES => 'Áreas y Sectores', :tituloEn => 'Areas and sectors', :menuNumber => 2,
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
  @data={:tituloES => 'Prensa', :tituloEn => 'Press', :menuNumber => 5,
         :descripcionES => 'Descripcion de prensa', :descripcionEN => 'Description TRADUCIRRRR'}

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
