<?php

namespace App\Http\Middleware;

use Closure;

class SeoRedirectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $redirects = collect(settings('redirects.data'))->where('active', 1)->pluck('new', 'old');

        $redirect_url = $redirects[$request->url()] ?? null;

        return $redirect_url ? redirect($redirect_url) : $next($request);
    }
}
