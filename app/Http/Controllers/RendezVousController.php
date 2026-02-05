<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\RendezVous;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Mail\RendezVousConfirmation;
use Illuminate\Support\Facades\Mail;

class RendezVousController extends Controller
{
    /**
     * Display the appointment booking form
     */
    public function create()
    {
        return Inertia::render('RendezVous');
    }

    /**
     * Store a new appointment booking
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telephone' => 'required|string|max:20',
            'fonction' => 'nullable|string|max:255',
            'date_rendez_vous' => 'nullable|date',
            'message' => 'nullable|string|max:1000',
        ]);

        // Create the appointment
        $rendezVous = RendezVous::create($validated);

        // Send confirmation email
        try {
            Mail::to($validated['email'])->send(new RendezVousConfirmation($rendezVous));
        } catch (\Exception $e) {
            // Log error but don't fail the request
            Log::error('Failed to send confirmation email: ' . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Votre demande de rendez-vous a été envoyée avec succès. Nous vous contacterons bientôt.');
    }
}
