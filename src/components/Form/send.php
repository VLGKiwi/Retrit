<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "7619833255:AAHlXlretJm4jyJsJ5ORbDIoQFMySAeep14";

//Сюда вставляем chat_id
$chat_id = "-1002364277848";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $fio = ($_POST['fio']);
    $phone = ($_POST['phone']);
		$mail = ($_POST['mail']);
		$tg = ($_POST['tg']);


//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $fio,
        'Телефон:' => $phone,
				'Почта:' => $mail,
				'Телеграм:' => $tg
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
//     if ($sendToTelegram) {
//         alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
//     }

// //А здесь сообщение об ошибке при отправке
//     else {
//         alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
//     }
}

?>
