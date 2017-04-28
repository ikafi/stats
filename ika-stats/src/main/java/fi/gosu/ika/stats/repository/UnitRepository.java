package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Unit Repository
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
public interface UnitRepository extends JpaRepository<Unit, Long> {
}
