import type { base } from '@/models';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import type { PageComponentProps } from './types';

export default async function FormPage({
  page,
}: PageComponentProps<base.FormPage>) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="index-header__title">{page.title}</h1>
          </div>
          <div className="col-md-8 index-header__body-introduction">
            {page.body.length > 0 && <BaseStreamBlock blocks={page.body} />}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 form-page">
            <form action={page.meta.html_path} method="POST">
              {page.form_fields.map((field) => (
                <div key={field.id} className="form-page__field">
                  <label htmlFor={`id_${field.id}`}>
                    {field.label}
                    {field.required && <span className="required">*</span>}
                  </label>

                  {field.help_text && <p className="help">{field.help_text}</p>}

                  {field.field_type === 'select' ? (
                    <select
                      id={`id_${field.id}`}
                      name={field.label}
                      required={field.required}
                      defaultValue={field.default_value || ''}
                    >
                      {field.choices?.map((choice) => (
                        <option key={choice} value={choice}>
                          {choice}
                        </option>
                      ))}
                    </select>
                  ) : field.field_type === 'textarea' ? (
                    <textarea
                      id={`id_${field.id}`}
                      name={field.label}
                      required={field.required}
                      defaultValue={field.default_value || ''}
                    />
                  ) : (
                    <input
                      id={`id_${field.id}`}
                      type={field.field_type === 'email' ? 'email' : 'text'}
                      name={field.label}
                      required={field.required}
                      defaultValue={field.default_value || ''}
                    />
                  )}
                </div>
              ))}
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
