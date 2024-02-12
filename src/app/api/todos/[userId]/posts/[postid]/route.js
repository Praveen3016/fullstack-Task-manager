export function GET(request, {params})
{
   console.log(params)
 return  NextResponse.json(params)
}