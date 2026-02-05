<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Confirmation de Rendez-Vous</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">Confirmation de votre demande de rendez-vous</h2>

        <p>Bonjour <strong>{{ $rendezVous->nom }}</strong>,</p>

        <p>Nous avons bien reçu votre demande de rendez-vous. Voici un récapitulatif de vos informations :</p>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Date souhaitée :</strong>
                {{ \Carbon\Carbon::parse($rendezVous->date_rendez_vous)->format('d/m/Y') }}</p>
            <p><strong>Email :</strong> {{ $rendezVous->email }}</p>
            <p><strong>Téléphone :</strong> {{ $rendezVous->telephone }}</p>
            @if ($rendezVous->fonction)
                <p><strong>Fonction :</strong> {{ $rendezVous->fonction }}</p>
            @endif
        </div>

        @if ($rendezVous->message)
            <div style="margin-bottom: 20px;">
                <strong>Votre message :</strong>
                <p style="font-style: italic;">"{{ $rendezVous->message }}"</p>
            </div>
        @endif

        <p>Notre équipe vous contactera très prochainement pour confirmer l'heure exacte et les détails de votre
            rendez-vous.</p>

        <div
            style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px; font-size: 0.9em; color: #6b7280;">
            <p>Cordialement,<br>L'équipe Biomédical</p>
        </div>
    </div>
</body>

</html>
