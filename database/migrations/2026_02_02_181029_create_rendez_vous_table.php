<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rendez_vous', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('email');
            $table->string('telephone', 20);
            $table->string('fonction')->nullable();
            $table->date('date_rendez_vous')->nullable();
            $table->text('message')->nullable();
            $table->timestamps();

            // Add indexes for better query performance
            $table->index('email');
            $table->index('date_rendez_vous');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rendez_vous');
    }
};
