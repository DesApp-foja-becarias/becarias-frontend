### HOOKS

Los Hooks creados a continuacion fueron creados exclusivamente para funcionar dentro de esta aplicacion, a continuacion se mostrataran estos mismos junto con su modo de uso.

**Table of Contents**

[TOCM]

[TOC]

#useAuth

##Descripción

Este Hooks fue creado para autentificar al usuario al ingresar en el sistema, por ahora solamente funciona desde el front, lo previsto es mutarlo para poder usarlo como originalmente se pensó, con tokens y roles.

## exports

###user
Tipo: Objeto
```javascript 
  {
      "username": "j.carro@gmail.com",
      "password": "123456",
      "isAuthenticated": true,
      "firstName": "Jessica",
      "lastName": "Carro"
   }
```
Es el estado que llega desde el AuthContext, la informacion de la usuaria, en este caso Jessica Carro.

###login
Tipo: Función
```javascript 
login(event, user)
```
login es la funcion que justamente logea en el sistema, disparando diferentes funciones para mantener logeada a la usuaria en el sistema.
Este mismo recibe como primer parametro el Evento y el segundo un usuario

###logout
Tipo: Función
```javascript 
logout()
```
logout es la funcion justamente para hacer logout en el sistema.

## Uso
```javascript 
const {logout,user,login} = useAuth()
```

#useAxios
## Descripción
Este hook fue creado principalmente para disparar la espera de la carga de la pagina, disparar el snackbar y sumarle tambien la redireccion si asi lo necesitase.

##exports
###useAxiosCall
Tipo: Función
```javascript 
invocacionDelHook.useAxiosCall()
```
funcion para poder usar este Hook, es quien ejecuta el llamado.

##Uso
```javascript 
const deleteActivityAxios = useAxios({
		call: () => deleteActivity(id)
		, errorMessage: 'No se pudo eliminar la actividad'
		, successMessage: 'Actividad eliminada'
		, loadingMessage: 'Eliminando actividad...'
		, redirectErr: '/actividades'
		, redirectSucc: '/actividades'
	})
```
`call`: Se escribe de esa forma, basicamente ahi va la llamada que va a ser ejecutada al momento de usar el useAxiosCall **(OBLIGATORIO)**
`errorMessage`: es el mensaje de error que se dispararia si falla la llamada de axios.**(OPCIONAL)**
`successMessage`: es el mensaje de exito en caso de que se funcione bien el axios.**(OPCIONAL)**
`loadingMessage`: Es el mensaje que aparece al cargar la pantalla.**(OPCIONAL)**
`redirectErr`: el path hacia donde ir en caso de falla la llamada de axios.**(OPCIONAL)**
`redirectSucc`: el path hacia donde ir en cas de exito de la llamada de axios.**(OPCIONAL)**

#useDialog
##Descripcíon
Este Hook esta hecho para poder manejar los cuadros de dialogo de una forma mucho mas simple y rapida.
##exports
###openDialog
tipo: Función
```javascript
openDialog(
'Eliminar becaria', 
`¿Está seguro que desea eliminar a la becaria ${scholar.name}?`,
() => {
	deleteScholarActivityRelations([scholar.id], id)
	window.location.reload(false)
})
}}
```
Esta funcion recibe como primer parametro el titulo del dialogo,como segundo parametro recibe el contenido que generalmente es una pregunta, como tercer parametro recibe la funcion a ejecutar en caso de aceptar el dialogo y como cuarto recibe una funcion por si se decide que no en el dialogo, esta ultima es opcional.

###closeDialog
```javascript
closeDialog()
```
Esta funcion se ejecuta para cerrar el dialogo/ esconder el dialogo.

##Uso
	const {openDialog, closeDialog} = useDialog()

#useLoadingScreen
##Descripción
 Este Hook fue pensado principalmente para ser usado dentro del useAxios, ya que es quien modifica el contexto en el que se muestra la pantalla de carga, aunque puede ser usado fuera de este mismo.
 El hook por si solo no funciona, solo funciona si desde la pagina en la que se requiere la pantalla de carga tenga como un condicional la carga de esta misma. 
 
 ##exports
 ###showLoadingScreen
 Tipo: Función
```javascript 
showLoadingScreen(loadingText)
```
Esta funcion activa la pantalla de carga y como parametro se le puede enviar un mensaje para que al estar cargando, este se muestre, vale aclarar que este mensaje es Opcional.

###hideLoadingScreen
Tipo: Función
```javascript 
hideLoadingScreen
```
Esta funcion es para esconder la pantalla de carga.

##Uso
    const { showLoadingScreen, hideLoadingScreen} = useLoadingScreen();

#useMailSender
##Descripción
Este Hook fue creado para poder manejar el manejo de envio de mails de mailJet de forma mas facil.
##exports

###setShowMailSender
Tipo: Función
	setShowMailSender(True)
Esta funcion sirve para mostrar el mailsender.

###showMailSender
Tipo:Bool
	showMailSender
Es el estado de verdad de si esta activo o no el MailSender

###sendMail
Tipo: Función
	sendMail({selectedUsers:[], subject:'', htmlText: text})
Esta Funcion es la encargada de ejecutar el envio de mail de mailjet, como parametro recibe un objecto el cual contiene 
`selectedUsers`: Un array de los usuarios seleccionados.
`subject`: el asunto del mensaje.
`htmlText`: El mensaje el cual puede ser un string o un html con etiquetas y todo.

##Uso
```javascript
const {
		setShowMailSender,
		showMailSender,
		sendMail,
	} = useMailSender()

```
#useSnackbar
##Descripción
Este Hook sirve para disparar el snackbar de la pagina.

##exports
###showSnackbar
Tipo:Funcion
	showSnackbar('El envio de correos ha sido exitoso', 'success')
Esta funcion al ser ejecutada muetra un mensaje en la parte inferior de la pantalla con un mensaje el cual se envia por el primer parametro y este mensaje como fondo tiene un color el cual se indica como segundo parametro.

###closeSnackbar
Tipo:Funcion
	closeSnackbar()
Esta funcion es simplemente para cerrar el snackbar.

###snackbar
Tipo: Objeto
```javascript
{
	 open: false,
	message: '',
    severity: 'info',
}
```
Este es el objeto con la forma del snackbar

##Uso
	const {showSnackbar} = useSnackbar();

#useValidator
##Descripción
Este Hook fue creado justamente para validar ciertos items que estan en varios lugares.
##exports
###areValidFields
Tipo:Booleano
Es el estado de verdad de que todos los campos que se le pasen al hook.
###errors
Tipo:Objeto
Es un objeto el estado de verdad de cada campo a validar.
###validateNotEmpty
Tipo:Función

	validateNotEmpty(e,field)

Es una funcion que valida que un campo no este vacio.

###validateDni
Tipo:Función

	validateDni(e)

Esta funcion sirve para justamente validar el campo DNI.
Mas precisamente que tenga el largo correcto.

###validateEmail
Tipo:Función

	validateEmail(e)

Esta función sirve para validar que lo ingresado sea un Email.

###validatePhone
Tipo:Función

	validatePhone(e)

Esta funcion sirve para validar que lo ingresado es un telefono.

###validateAccountNumber
Tipo:Función

	validateAccountNumber(e)

Esta funcion sirve para validar que lo ingresado es un numero de cuenta.

###validateCBU
Tipo:Función

	validateCBU(e)
Esta funcion sirve para validar que lo ingresado sea un CBU
