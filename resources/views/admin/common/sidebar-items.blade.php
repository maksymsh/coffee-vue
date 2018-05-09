@foreach($items as $item)
  <li@lm-attrs($item) class ="nav-item" @lm-endattrs>
    @if($item->link) <a@lm-attrs($item->link) class="nav-link @if($item->hasChildren()) nav-toggle @endif" @lm-endattrs href="{!! $item->url() !!}">
      {!! $item->title !!}
      @if($item->hasChildren())
        <span class="arrow"></span>
      @endif
    </a>
    @else
      {!! $item->title !!}
    @endif
    @if($item->hasChildren())
      <ul class="sub-menu">
        @include('admin.common.sidebar-items', ['items' => $item->children()])
      </ul>
    @endif
  </li>
  @if($item->divider)
  	<li{!! Lavary\Menu\Builder::attributes($item->divider) !!}></li>
  @endif
@endforeach
